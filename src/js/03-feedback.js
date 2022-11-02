import throttle from 'lodash.throttle';


class InputSaver {
    constructor() {
        this.getEl = (selector) => document.querySelector(selector);
    } 

    pushSubmit() {
        
        this.getEl('.feedback-form').addEventListener('submit', (event) => {
            event.preventDefault();

            let settings = localStorage.getItem("feedback-form-state");
            let parsedSettings = JSON.parse(settings);

            console.log(parsedSettings);

            localStorage.clear();
            this.getStoreValues();
        });

    };


    CreateState(typeEL, valueEl) {

        let settings = JSON.parse(localStorage.getItem("feedback-form-state"));
        if (settings === null) {
            settings = {
                name: "",
                message: ""
            };
        }

        if (typeEL === 'email') {
            settings.email = valueEl;
            // console.log(typeEl);
        }
        if (typeEL === 'textarea') {
            settings.message = valueEl;
            //console.log(valueEl);
        }

        localStorage.setItem("feedback-form-state", JSON.stringify(settings));
        //console.log(settings);
    }


    listenInput() {
       // let getEl = (selector) => document.querySelector(selector);
        this.getEl('.feedback-form').addEventListener('input', throttle(() => {
            if (event !== undefined) {
                //console.log(event.target);

                let valueEl = event.target.value;
                let typeEL = event.target.type;

                // console.log(typeEL);
                this.CreateState(typeEL, valueEl);
            }

        }, 500));
    }

    getStoreValues() {
        // console.log(event.target);
        //console.log('!!!!!!');
        let settings = localStorage.getItem("feedback-form-state");
        let parsedSettings = JSON.parse(settings);

        //let getEl = (selector) => document.querySelector(selector);

        if (parsedSettings !== null) {
            if (parsedSettings.email !== undefined) {
                this.getEl("input[name=email]").value = parsedSettings.email;
            };
            if (parsedSettings.message !== undefined) {
                this.getEl("textarea[name=message]").value = parsedSettings.message;
            };
        } else {
            this.getEl("input[name=email]").value = "";
            this.getEl("textarea[name=message]").value = "";
        }
    }

    listenReload() {
        window.addEventListener('load', this.getStoreValues)
    }

    init() {
        this.listenReload();
        this.listenInput();
        this.pushSubmit();

    }
};

let inputSaver = new InputSaver();
inputSaver.init();