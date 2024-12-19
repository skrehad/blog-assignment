import { FilterQuery, Query } from 'mongoose';

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

    // Exclude fields that are not part of the filter criteria
    const excludeFields = ['search', 'sortBy', 'sortOrder', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

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
}

export default QueryBuilder;
