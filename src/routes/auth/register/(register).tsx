import { createSignal } from "solid-js";

export default function Register() {
  const [username, setUsername] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");
  const [status, setStatus] = createSignal<string>("");

  return (
    <form class="space-y-2">
      <div class="flex flex-col border">
        <label>Username</label>
        <input id="username" type="text" required />
      </div>
      <div class="flex flex-col border">
        <label>Password</label>
        <input id="password" type="password" required />
      </div>
      <div class="flex justify-between">
        <button class="bg-red-600" type="submit">
          Register
        </button>
      </div>
    </form>
  );
}
