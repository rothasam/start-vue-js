import { defineStore } from "pinia";

export const useCustomValidation = defineStore("customValidation", {

    actions: {
        /**
         * Validate the input value of an element using a given regular expression.
         * If event is provided, it will get the target element from the event.
         * If no element is found, it will log an error message.
         * If the value is empty, it will remove both 'invalid' and 'valid' class.
         * If the value is valid, it will add 'valid' class and remove 'invalid' class.
         * If the value is invalid, it will add 'invalid' class and remove 'valid' class.
         * @param {RegExp} regex - The regular expression to use for validation.
         * @param {Event} [event] - The event object to get the target element from.
         */
        customValidation(regex, event = null) {

            const element = event ? event.target : document.activeElement;
            if (element) {
                const value = element.value;
                const isValid = regex.test(value);

                var input = element;
                var trimInputValue = input.value.trim();
                var inputWrapper = input.parentElement;

                while (inputWrapper && !inputWrapper.classList.contains('input-contain')) {
                    inputWrapper = inputWrapper.parentElement;
                }


                if (inputWrapper) {
    
                    if (trimInputValue == '') {
                        inputWrapper.classList.remove('invalid');
                        inputWrapper.classList.remove('valid');
                    } else {
                        if (regex.test(input.value)) {
                            inputWrapper.classList.add('valid');
                            inputWrapper.classList.remove('invalid');
                        } else {
                            inputWrapper.classList.add('invalid');
                            inputWrapper.classList.remove('valid');
                        }
                    }
                } else {
                    alert('ERROR: .tf-input-primary not found');
                }


                console.log(`Validation result: ${isValid}`);
            } else {
                console.error("No element found for validation.");
            }
        }
    }
});