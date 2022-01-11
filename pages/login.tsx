import { Wrapper } from "components/common";
import { Password } from "components/input";
import { Input, Button, Form } from "components/ui";
import { useRouter } from "next/router";

export default function Login() {
	const { push } = useRouter();

	return (
		<Wrapper title="Se connecter" className="flex items-center justify-center">
			<Form
				className="flex flex-col w-96 m-auto space-y-4"
				onSubmit={({ value }) =>
					fetch("/api/login", {
						body: JSON.stringify(value),
						method: "POST",
					}).then(({ ok }) => ok && push("/"))
				}
				disabled={() => ({})}
				errors={{}}
				value={{ username: "", password: "" }}
			>
				{({ value }) => (
					<>
						<Input
							name="username"
							placeholder="Nom d'utilisateur"
							value={value.username}
						/>
						<Password
							name="password"
							placeholder="Mot de passe"
							type="password"
							value={value.password}
						/>
						<Button type="submit" width="w-full">
							Se connecter
						</Button>
					</>
				)}
			</Form>
		</Wrapper>
	);
}
