// Import our CSS
import '../css/index.pcss';

import { Embla } from  "./modules/embla.js";

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
    import.meta.hot.accept(() => {
        console.log("HMR")
    });
}

export default class Avgoustos {
    constructor() {
        Avgoustos.domReady().then(this.ready.bind(this));
    }

    ready() {
        this.applyEmbla()
        this.loadTemp()
    }

    applyEmbla() {
        const carousels = document.getElementsByClassName('embla')

        for (const carousel of carousels) {
            new Embla(carousel)
        }
    }

    loadTemp() {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=36.14&longitude=23.00&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m'
        this.loadJSON(url, this.setTemp, 'console.log')
    }

    setTemp(data) {
        const el = document.getElementById('temp')

        const temp = data.current.temperature_2m
        const unit = data.current_units.temperature_2m

        el.innerText = temp + unit
    }

    // TODO: Move to separate file if we keep it (but we probably won't)?
    // loadJSON method to open the JSON file.
    loadJSON(path, success, error) {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
                }
                else {
                error(xhr);
                }
            }
        }
        xhr.open('GET', path, true)
        xhr.send()
    }

    static domReady() {
        return new Promise((resolve) => {
            document.addEventListener('DOMContentLoaded', resolve, {passive: true});
        });
    }
}

new Avgoustos()