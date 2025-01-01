import React, { useState } from 'react';

const SiteControlForm = () => {
  const [logo, setLogo] = useState<File | null>(null);
  const [theme, setTheme] = useState<string>('light');

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setLogo(event.target.files[0]);
    }
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement the logic to update the logo and theme
    console.log('Logo:', logo);
    console.log('Theme:', theme);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-md shadow-lg">
      <div>
        <label htmlFor="logo" className="block text-sm font-medium text-gray-700">Logo</label>
        <input
          type="file"
          id="logo"
          onChange={handleLogoChange}
          className="mt-1 block w-full border border-gray-50 p-2 shadow outline-none rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
        />
      </div>
      <div>
        <label htmlFor="theme" className="block text-sm font-medium text-gray-700">Theme</label>
        <select
          id="theme"
          value={theme}
          onChange={handleThemeChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-50 p-2 shadow outline-none rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-150 ease-in-out">
        Save Changes
      </button>
    </form>
  );
};

export default SiteControlForm;
