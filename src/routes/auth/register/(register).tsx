import { createSignal, JSX } from "solid-js";

export default function Register() {
  const [username, setUsername] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");
  const [status, setStatus] = createSignal<string>("");

  const onSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent> = async (
    e
  ) => {
    e.preventDefault();

    console.log(username(), password());
  };

  return (
    <form class="space-y-2" onSubmit={onSubmit}>
      <div class="flex flex-col border">
        <label>Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username()}
          id="username"
          type="text"
          required
        />
      </div>
      <div class="flex flex-col border">
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password()}
          id="password"
          type="password"
          required
        />
      </div>
      <div class="flex justify-between">
        <button class="bg-red-600" type="submit">
          Register
        </button>
      </div>
    </form>
  );
}
