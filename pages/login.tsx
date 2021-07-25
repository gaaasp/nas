import { Input, Button } from "components";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
	const { push } = useRouter();
	const [form, setForm] = useState({ username: "", password: "" });

	return (
		<form
			method="POST"
			className="flex flex-col w-96 m-auto space-y-4"
			onSubmit={(e) => {
				e.preventDefault();
				e.defaultPrevented;
				fetch("/api/login", {
					body: JSON.stringify(form),
					method: "POST",
				}).then(({ ok }) => ok && push("/"));
			}}
		>
			<Input
				name="username"
				placeholder="Nom d'utilisateur"
				value={form.username}
				onChange={({ target }) =>
					setForm((form) => ({
						...form,
						username: target.value,
					}))
				}
			/>
			<Input
				name="password"
				placeholder="Mot de passe"
				type="password"
				value={form.password}
				onChange={({ target }) =>
					setForm((form) => ({
						...form,
						password: target.value,
					}))
				}
			/>
			<Button type="submit">Se connecter</Button>
		</form>
	);
}
