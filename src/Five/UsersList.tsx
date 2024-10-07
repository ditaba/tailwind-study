import { useState } from "react";

interface User {
  name: string;
  job: string;
  avatar: string;
  tags: string[];
}

const users: User[] = [
  {
    name: "Alice Johnson",
    job: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    tags: ["JavaScript", "React", "Node.js"],
  },
  {
    name: "Bob Smith",
    job: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    tags: ["Agile", "Scrum", "Leadership"],
  },
  {
    name: "Carol White",
    job: "UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    tags: ["Design", "Figma", "Prototyping"],
  },
  {
    name: "David Brown",
    job: "DevOps Engineer",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    name: "Eve Davis",
    job: "Data Scientist",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    tags: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    name: "Frank Wilson",
    job: "Backend Developer",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    tags: ["Java", "Spring", "Microservices"],
  },
];

export const UsersList = () => {
  const [query, setQuery] = useState("");

  const FILTERS: string[] = [
    "Reputation",
    "New users",
    "Votes",
    "Editors",
    "Moderators",
  ];

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="min-w-[40rem] rounded-lg bg-white p-16 shadow">
      <h1 className="font-popi text-3xl font-black">Users</h1>

      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <div>
          <div className="relative grow rounded-md border border-gray-300">
            <input
              type="text"
              placeholder="Search users"
              className="mr-2 w-full px-4 py-3 pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div>
          <div className="space-x-2">
            {FILTERS.map((item) => (
              <a
                className="mb-2 inline-block cursor-pointer rounded-lg bg-white px-4 py-3 hover:bg-[#a5b4fc] hover:text-white"
                id={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <div
            key={user.name}
            className="flex items-center gap-4 border-gray-200 p-4 hover:cursor-pointer hover:rounded-lg hover:border hover:bg-gray-100 hover:shadow-lg hover:transition-all hover:duration-300"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="h-16 w-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-500">{user.job}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {user.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded bg-gray-200 px-2 py-1 text-xs font-medium text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
