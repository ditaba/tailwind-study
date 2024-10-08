interface AccountListProps {
  logo: string;
  name: string;
  subtitle: string;
  account: number;
}

const accounts: AccountListProps[] = [
  {
    logo: "data:image/png;base64,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",
    name: "Dropbox",
    subtitle: "dropbox.com",
    account: 24,
  },
  {
    logo: "data:image/png;base64,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",
    name: "Pinterest",
    subtitle: "pinterest.com",
    account: 3,
  },
  {
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEXz8/PzUyWBvAYFpvD/ugjz9PX19PXz+fr39fr69vPy9fp5uAAAofD/tgDz3Nji6tfzRADzTBfzmYew0oB/xfH70IDX5/P16tfz5eLo7eHzPADzlICs0Hfh6/N3wvH7znj07eEAnvDzvbPL3q6u1/L43q6vy/leAAABd0lEQVR4nO3cR1IDQRREwcb0SEgj770B7n9FNmhEBL1g8zUs8l2gIi9QKUmSpHs5vPtWFV4uANMwunUD3IyiS7+Jebgdx7bddb63uvt+dKOqIBw/xTaZNsLZc3CEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEjxVuJ7GNfwj7LQjTejcN7noTVu+z4PabgjB1wmumqm50JaAkSX/oLbxmKveiK/zqp8NxHtvx40bMn6dFbKdzgbi81MEdb8LeaRDdqiSsX2Kr541wMXiNjZCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPCxwuj/0kvb/6V5Gd2hmTqvokulm90HluNrFyhJ0j/rC6N0RI28dGy3AAAAAElFTkSuQmCC",
    name: "Microsoft",
    subtitle: "microsoft.com",
    account: 19,
  },
];

export const AccountList = () => {
  return (
    <div className="w-[60rem] rounded-3xl bg-white p-24">
      <div className="flex items-center">
        <div className="relative rounded-md border border-gray-300">
          <input
            type="text"
            placeholder="Search"
            className="mr-2 w-full px-4 py-3 pl-10"
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

        <div className="ml-auto flex">
          <button className="inline-flex h-16 w-16 rounded-full p-2 text-[#334155]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button className="h-16 w-16 rounded-full bg-[#8598FC] p-2 text-3xl text-white">
            IG
          </button>
        </div>
      </div>
      <h1 className="font-mori pt-10 text-3xl font-medium">Accounts</h1>
      <div className="mt-7 w-full">
        {accounts.map((account) => (
          <div className="flex items-center justify-between p-5 hover:bg-purple-100">
            <div className="flex gap-8">
              <img className="h-16 w-16 rounded-full" src={account.logo} />
              <div>
                <h2 className="font-popi text-3xl font-semibold">
                  {account.name}
                </h2>
                <p>{account.subtitle}</p>
              </div>
            </div>
            <div>{account.account} accounts</div>
            <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white hover:bg-slate-100">
              <svg
                className="h-6 w-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M6 12h.01m6 0h.01m5.99 0h.01"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
