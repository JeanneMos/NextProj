const nextConfig = {
	// output: "export",
	images: {
		unoptimized: true,
	},
	async rewrites() {
		return [
			{
				source: "/users",
				destination: "/api/user",
			},
		];
	},
};

module.exports = nextConfig;
