import { FilterQuery, Query, Types } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  // Search by title (or other searchable fields)
  search(searchableFields: string[]) {
    const searchTerm = this?.query?.search as string;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }

    return this;
  }

  // Filter by specific fields (author, etc.)
  filter() {
    const queryObj = { ...this.query }; // copy query params

    // Check if 'filter' is present in the query and try to filter by author
    if (queryObj['filter']) {
      const authorId = queryObj['filter'] as string;

      // Log the authorId to console to see what value is being passed
      // console.log('Received authorId for filtering:', authorId);

      // Check if 'filter' is a valid ObjectId (it could be a string that represents ObjectId)
      if (Types.ObjectId.isValid(authorId)) {
        const objectId = new Types.ObjectId(authorId);
        // Log the ObjectId for confirmation
        // console.log('Valid ObjectId:', objectId);

        // Filter by the 'author' field with the converted ObjectId
        this.modelQuery = this.modelQuery.find({ author: objectId });
      } else {
        console.error('Invalid ObjectId:', authorId);
        // If invalid ObjectId, you could return an empty result or throw an error
      }
    }

    // Apply all other filters (other fields)
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }

  // Sorting blogs by a field and order (ascending/descending)
  sort() {
    const sortBy = (this?.query?.sortBy as string) || 'createdAt';
    const sortOrder = (this?.query?.sortOrder as string) || 'desc';

    // Constructing sort order: asc or desc
    const sortQuery = sortOrder === 'asc' ? `${sortBy}` : `-${sortBy}`;
    this.modelQuery = this.modelQuery.sort(sortQuery);
    return this;
  }

  // Select specific fields to return
  fields() {
    const fields =
      (this?.query?.fields as string)?.split(',')?.join(' ') || '-__v';
    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }

  // Remove non-filterable fields (search, sortBy, sortOrder, fields)
  excludeNonFilterFields() {
    const excludeFields = ['search', 'sortBy', 'sortOrder', 'fields'];
    excludeFields.forEach((el) => delete this.query[el]);
  }
}

export default QueryBuilder;
