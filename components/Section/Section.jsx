export function Section({ children, id="",className = ""}) {
	return (
		<section id={id}
			// className={`px-[20px] py-[54px] t:px-[32px] t:py-[64px]
			// d:px-[24px] d:py-[90px] dl:px-[104px] w-full
			// bg-center bg-no-repeat bg-cover ${className}`}
			className={` bg-center bg-no-repeat bg-cover   ${className}`}
		>
			{children}
		</section>
	);
}