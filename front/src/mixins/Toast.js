import { TYPE } from "vue-toastification";
export default {
    data() {
        return {
            config: {
                position: "top-right",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: true,
                hideProgressBar: false,
                closeButton: "button",
                icon: true,
                rtl: false,
            }
        }
    },
    methods: {
        toastSuccess(message) {
            this.$toast(message, {
                type: TYPE.SUCCESS
            });
        },
        toastError(message) {
            this.$toast(message, {
                type: TYPE.ERROR
            });
        }
    }
}