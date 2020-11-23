<div>
    <!-- Request -->
    <div id="request" class="form-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <h2>Preencha o seguinte formulário para feedback</h2>
                        <p>Mande susgestões ou mesmo críticas construtivas para equipe do ponto eletrônico. Agradecemos
                            sua colaboração.</p>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-6">

                    <!-- Request Form -->
                    <div class="form-container">
                        @if ($send > 0)
                        <div class="alert alert-success" role="alert">
                            Mensagem enviada com sucesso!
                            <button wire:click="resetPropres" type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        @endif

                        <form wire:submit.prevent="submit" id="requestForm" data-toggle="validator" data-focus="false">
                            <div class="form-group has-error has-danger">
                                <select wire:model="subject" class="form-control-select" id="rselect" required>
                                    <option class="select-option" value="Sugestões" selected="">Sugestões</option>
                                    <option class="select-option" value="Críticas Construtivas">Críticas Construtivas
                                    </option>
                                    <option class="select-option" value="Outros">Outros</option>
                                </select>
                                @error('subject') <span class="error text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control-input" wire:model="name" id="rname">
                                <label class="label-control" for="rname">Nome</label>
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control-textarea" id="cmessage" wire:model="text"></textarea>
                                <label class="label-control" for="cmessage">Mensagem</label>
                                @error('text') <span class="error text-danger">{{ $message }}</span> @enderror
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control-submit-button">
                                    ENVIAR
                                </button>
                            </div>

                        </form>
                    </div> <!-- end of form-container -->
                    <!-- end of request form -->

                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of form-1 -->
    <!-- end of request -->
</div>