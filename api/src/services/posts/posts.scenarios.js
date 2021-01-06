export const standard = defineScenario({
  post: {
    first: {
      title: 'First Post',
      body: 'Lorem ipsum dolar sit amet',
    },
  },
})

export const withLongBody = defineScenario({
  post: {
    long: {
      title: 'First Post',
      body:
        "I'm baby succulents single-origin coffee coloring book taxidermy sartorial. Irony woke tilde, gentrify you probably haven't heard of them tumblr typewriter enamel pin brunch viral live-edge. Pok pok plaid fingerstache, copper mug pitchfork pickled 3 wolf moon farm-to-table sustainable. Jean shorts freegan salvia tofu dreamcatcher vaporware asymmetrical +1. Pabst gentrify keytar ennui mixtape. Franzen tbh cred austin, health goth intelligentsia flannel pug you probably haven't heard of them 8-bit try-hard tumeric 3 wolf moon cray. Tumeric edison bulb distillery slow-carb subway tile authentic literally kinfolk venmo.\n Food truck pop-up ugh, tacos gluten-free lyft readymade four dollar toast brunch palo santo quinoa. Mixtape twee meh chicharrones lyft. Helvetica succulents brooklyn, farm-to-table +1 quinoa mlkshk vegan you probably haven't heard of them hella bespoke af. Tilde distillery taxidermy artisan, chillwave tofu direct trade raclette polaroid deep v sustainable. Chambray iPhone letterpress, helvetica XOXO wayfarers migas. Hoodie roof party tilde cornhole, heirloom normcore copper mug schlitz meditation YOLO lumbersexual franzen drinking vinegar gluten-free swag.",
    },
  },
})
