function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 md:p-8 sm:p-4 sm:max-w-xs md:max-w-sm mx-auto mx-auto rounded-lg shadow-lg my-20 hover:shadow-xl">
        <img src="https://via.placeholder.com/150" className="rounded-full md:w-36 md:h-36 sm:w-24 sm:h-24 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" alt="User" />
        <h1 className="md:text-xl sm:text-lg text-blue-800 my-4">John Doe</h1>
        <p className="text-gray-600 md:text-base sm:text-sm hover:text-blue-500">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;