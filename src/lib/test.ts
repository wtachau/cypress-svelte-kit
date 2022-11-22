export const printEnv = () => {
	if (import.meta.env.PROD) {
		console.log('Prod env');
	} else {
		console.log('Dev env');
	}
};
