// import { gql } from "@apollo/client";
// import type { ActionFunction } from "@remix-run/node";
// import { Form } from "@remix-run/react";
// import { graphQLClient } from "~/lib/apollo";

// const mutation = gql`
//   mutation Mutation($email: String!) {
//     sendMagicLink(email: $email) {
//       ok
//     }
//   }
// `;

// export const action: ActionFunction = async ({ request }) => {
//   const formData = await request.formData();
//   const email = formData.get("email");

//   const { data } = await graphQLClient.mutate({
//     mutation,
//     variables: { email },
//   });

//   return data;
// };

// export default function Login() {
//   return (
//     <Form method="post" className="flex flex-col gap-3">
//       <label htmlFor="email">MAAAAAGICCCC</label>
//       <input type="email" name="email" id="email" className="border" />
//       <button type="submit">Send</button>
//     </Form>
//   );
// }

import { Link } from "@remix-run/react";
import { button } from "~/components/Button";

export default function Login() {
  return (
    <div className="p-7 bg-purple-50 rounded-xl flex flex-col gap-5">
      <h3 className="text-2xl flex-1 text-purple-700 font-bold">Login</h3>
      <div>
        <Link to="/app/" className={button()}>
          Dashboard
        </Link>
      </div>
    </div>
  );
}
