import Head from "next/head";

export const getStaticProps = (context) => {
	return {
		props: {},
	};
};
export default function Page() {
	return (
		<>
			<Head>
				<title>NextProj</title>
			</Head>
			<h1>Test</h1>
		</>
	);
}
