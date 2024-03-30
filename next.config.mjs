/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer }) => {
		// Add file-loader rule for GLB files
		config.module.rules.push({
			test: /\.(glb)$/i,
			use: [
				{
					loader: "file-loader",
					options: {
						publicPath: "/_next",
						name: "static/media/[name].[hash].[ext]", // You can adjust the output path and filename pattern here
					},
				},
			],
		});

		// Important: return the modified config
		return config;
	},
};

export default nextConfig;
