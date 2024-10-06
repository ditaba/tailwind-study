import { Input } from "./Input";
import { Review } from "./Review";

export const ReviewForm = () => {
  return (
    <div className="w-[42rem] space-y-8 rounded-3xl bg-white p-16">
      <h1 className="font-meri text-2xl font-black">Overall rating</h1>

      <div>
        <Review />
        <p className="text-sm font-normal">Click to rate</p>
      </div>

      <Input
        title="Review title"
        placeholder="Example: Easy to use"
        type="text"
      />

      <p>Would you recommend this product to a friend?</p>
      <div className="flex gap-8">
        <div>
          <input
            className="mr-1 scale-150 accent-[#121633]"
            type="radio"
            id="yes"
            name="recommend"
            value="yes"
          />{" "}
          <label className="cursor-pointer" htmlFor="yes">
            Yes
          </label>
        </div>
        <div>
          <input
            className="mr-1 scale-150 accent-[#121633]"
            type="radio"
            id="no"
            name="recommend"
            value="no"
          />{" "}
          <label className="cursor-pointer" htmlFor="no">
            No
          </label>
        </div>
      </div>

      <Input
        title="Product review"
        placeholder="Example: Since I bought this a month ago, I have been using it every day and it has been great."
        type="textarea"
      />

      <div className="flex gap-x-2">
        <div className="grow">
          <Input title="Nickname" placeholder="Example: bob27" type="text" />
        </div>
        <div className="grow">
          <Input
            title="Email address (will not ne published)"
            placeholder="Example: your@email.com"
            type="text"
          />
        </div>
      </div>

      <div>
        <input
          className="mr-1 scale-150 accent-[#121633]"
          type="radio"
          id="accept"
          name="accept"
          value="accept"
        />{" "}
        <label className="cursor-pointer" htmlFor="accept">
          I accept the terms and conditions
        </label>
      </div>
      <p className="text-sm font-medium">
        You will receive an email to verify your review. By submitting your
        review you agree to our Terms and Conditions. Your review will be posted
        on the site post moderation and will be displayed within 7 days.
      </p>

      <button className="rounded-lg bg-black p-4 text-white">
        Submit review
      </button>
    </div>
  );
};
