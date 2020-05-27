const Product = require(`./model/product`)

class SampleDb {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: `サンプルテキスト１`,
        heading2: `サンプルテキスト２`,
        heading3: `サンプルテキスト３`,
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言',
        headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: `サンプルテキスト１`,
        heading2: `サンプルテキスト２`,
        heading3: `サンプルテキスト３`,
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言',
        headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: `サンプルテキスト１`,
        heading2: `サンプルテキスト２`,
        heading3: `サンプルテキスト３`,
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言',
        headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone Special',
        price: 999,
        description: '',
        heading1: `サンプルテキスト１`,
        heading2: `サンプルテキスト２`,
        heading3: `サンプルテキスト３`,
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: 'テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言 テキスト文言',
        headingtext3: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'
      }
    ]
  }

  async initDb(){
    await this.cleanDb()
    this.PushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  PushProductsToDb() {
    this.products.forEach (
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb() {
    this.PushProductsToDb()
  }
}

module.exports = SampleDb