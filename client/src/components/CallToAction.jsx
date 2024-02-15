import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to Learn more about Javascript</h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with youtube channel
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://youtu.be/ER9SspLe4Hg?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Basic javascript
          </a>
        </Button>
      </div>
      <div className="flex-1">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="p-7"
        />
      </div>
    </div>
  );
}
