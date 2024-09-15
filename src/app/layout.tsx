import ClientWrapper from "@/components/hoc/clientWrapper";
import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang='en'>
			<body>
				<ClientWrapper>{children}</ClientWrapper>
			</body>
		</html>
	);
}
