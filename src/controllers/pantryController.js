const pantryService = require('../services/pantryService');

module.exports = {
    buscarTodos: async (req,res)=>{
        let json = {error: '', result:[]};

        let usuarios = await pantryService.buscarTodos();

        for(let i in usuarios){
            json.result.push({
                id: usuarios[i].id,
                nome: usuarios[i].nome,
                email:  usuarios[i].email,
                fone: usuarios[i].fone,
                nascimento: usuarios[i].data_nascimento
            });
            res.json(json);
        }
    }
}