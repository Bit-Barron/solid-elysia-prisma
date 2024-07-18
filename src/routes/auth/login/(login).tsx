import { createSignal } from "solid-js";
import AuthLayout from "~/components/container/layout";

export default function Login() {
  const [username, setUsername] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");
  const [status, setStatus] = createSignal<string>("");

  return (
    <AuthLayout>
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
            Login
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
