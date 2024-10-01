if (!window.fetchIntercepted) {
	window.fetchIntercepted = true;
	const originalFetch = window.fetch;
	window.fetch = async function() {
		let response = await originalFetch.apply(this, arguments);
		let theapi = arguments[0];
		if (theapi.includes('?')){
			apitype=theapi.split('?')[0]
		} else {
			apitype=theapi
		}
		console.log(apitype);
		const clonedResponse = response.clone();
		let result = await response.text();
		let thefetch = {};
		thefetch["api"] = theapi;
		thefetch["result"] = JSON.stringify(result);
		window.chrome.webview.hostObjects.ahkgetfetch(JSON.stringify(thefetch));
		if (response.status === 200 && apitype === "https://phpcis.chshb.gov.tw/api/v1/health_records/check_valid") {
			const modifiedResponseJson = {
				"code": 200,
				"message": "",
				"result": {
					"chronicReturnDate": "",
					"chronicTestDate": "",
					"isChronicReminder": false
				}
			};
			const modifiedResponse = new Response(JSON.stringify(modifiedResponseJson), {
				status: 200,
				statusText: '',
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			});
			return modifiedResponse;
		} else if (response.status === 200 && apitype === "https://phpcis.chshb.gov.tw/api/v1/prescriptions/list") {
			const modifiedResponseJson = {
				"code": 200,
				"message": "",
				"result": {
					"1": null,
					"3": null,
					"4": null,
					"5": null,
					"6": null,
					"7": null,
					"8": null,
					"9": null,
					"10": null,
					"11": null,
					"12": null,
					"13": null,
					"14": null,
					"15": null,
					"16": null,
					"18": null
				}
			};
			const modifiedResponse = new Response(JSON.stringify(modifiedResponseJson), {
				status: 200,
				statusText: '',
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			});
			return modifiedResponse;
		} else {
			return clonedResponse;
		}
	}
}