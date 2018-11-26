let myAxios = {
	get(url, params ={}){
		return new Promise((resolve, reject)=>{

			if (Object.keys(params).length > 0) {
				url += "?";
				for (var key in params) {
					url += key + '=' + params[key];
				}
			}

			let xhr = new XMLHttpRequest();

			xhr.open('GET', url, true);

			xhr.send();
			
			xhr.onload = function(){
				if(this.status !== 200)
					reject(new Error(this.status + ': ' + this.statusText));
				else
					resolve(this.responseText);
				
			}

			xhr.onerror = function(){
				reject(new Error("Issues with network connection"));
			}
			
		});
	},
	post(url, params = {default: "default"}) {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();

            var data = "";
            for (var key in params) {
                data += "&" + encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
            }

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.onload = function () {
                if (this.status == 200) 
                    resolve(this.response);
                 else 
                  	reject(new Error(this.status + ': ' + this.statusText));
                
            };
            xhr.onerror = function () {
               reject(new Error("Issues with network connection"));
            };
            xhr.send(data);
		});
	}
}