**Blog Platform Backend**  
Welcome to the Blog Platform Backend, a robust and secure system built using TypeScript, Node.js, Express.js, and MongoDB with Mongoose. This backend supports a full-featured blogging platform with authentication, role-based access control, and advanced API functionalities.

### **Features**  

- **User Roles**:  
  - **Admin**:  
    - Created manually in the database with predefined credentials.  
    - Can delete any blog and block users by updating the `isBlocked` property.  
    - Cannot update blogs.  

  - **User**:  
    - Can register and log in to access platform features.  
    - Create, update, and delete their own blogs.  
    - Cannot perform admin-level actions.  

- **Authentication & Authorization**:  
  - Secure login system for user authentication using JWT (JSON Web Token).  
  - Differentiated access control based on user roles (Admin/User).  

- **Public Blog API**:  
  - Fetch all blogs with features like search, sorting, and filtering.  
  - Blog details include title, content, author, and other metadata.  

- **Error Handling**:  
  - Consistent error response format for validation, authentication, and server issues.  
  - Detailed error messages to facilitate debugging.  

---

### **Technologies Used**  

- **Backend Framework**: Node.js with Express.js  
- **Language**: TypeScript for type safety and maintainable code.  
- **Database**: MongoDB with Mongoose for schema-based document modeling.  
- **Validation**: Zod for input validation.  
- **Authentication**: JWT for secure session management.  
- **Environment Configuration**: Dotenv for managing sensitive data.  

---

### **Key Functionalities**  

- **User Registration and Login**:  
  Register new users and generate tokens for secure session management.  

- **Blog Management**:  
  - **Users**: Create, update, and delete their own blogs.  
  - **Admins**: Manage platform by blocking users or deleting any blog.  

- **Advanced API Functionalities**:  
  - Search blogs by title or content.  
  - Sort blogs by date or title in ascending/descending order.  
  - Filter blogs by author or publication status.  

- **Error Types Handled**:  
  - Zod validation errors.  
  - Authentication and authorization errors.  
  - Resource not found or server issues.  

### **Future Enhancements**  

- Add comment and like functionalities for blogs.  
- Implement analytics for tracking blog views and engagement.  
- Enable multi-language support for blog content.  
