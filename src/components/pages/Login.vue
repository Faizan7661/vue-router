<template>

<div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold text-[royalblue] mb-6">Login</h1>
        <form >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="w-full mt-1 p-3 rounded-md border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full mt-1 p-3 rounded-md border border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white text-base p-3 rounded-md hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
      </div>

    </div>
</template>