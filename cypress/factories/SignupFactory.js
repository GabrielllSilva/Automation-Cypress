var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11931430018',
            address: {
                postalcode: '13300090',
                street: 'Rua Santa Cruz',
                number: '393',
                details: 'Apto. 107',
                district: 'Centro',
                city_state: 'Itu/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}