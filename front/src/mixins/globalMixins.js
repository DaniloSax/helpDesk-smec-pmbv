export default {
    data() {
        return {
            msg: {
                type: "error",
                toast: false,
                color: "",
                errors: "",
                success: "",
            },
        }
    },
    methods: {
        colorPriority(priority) {
            let color = "";
            if (priority == "Urgente") color = "red";
            if (priority == "Alta") color = "yellow darken-2";
            if (priority == "Média") color = "blue lighten-2";
            if (priority == "Baixa") color = "purple";
            return color;
        },
        colorStatus(statu) {
            let color = "";
            if (statu == "a iniciar") color = "#B2DFDB";
            if (statu == "andamento") color = "#FFF9C4";
            if (statu == "atrasado") color = "#E6EE9C";
            if (statu == "paralisado") color = "#EF9A9A";
            if (statu == "concluído") color = "#C6FF00";
            if (statu == "cancelado") color = "#BBDEFB";
            return color;
        },

        getMsgError(event) {
            this.msg.type = "error";
            this.msg.toast = true;
            this.msg.color = "error";
            this.msg.errors = event.errors;
            this.msg.message = "Dados inválidos";
        },
        getMsgSuccess(event) {
            if (event) {
                this.msg.type = "success";
                this.msg.toast = true;
                this.msg.color = "success";
                this.msg.errors = null;
                this.msg.success = true;
                this.msg.message = "Transação efetuada com sucesso!";
            }
        },
        clearMsg(event) {
            if (event) {
                this.msg.type = null;
                this.msg.toast = false;
                this.msg.color = null;
                this.msg.errors = null;
                this.msg.message = null;
            }
        },
    }
}