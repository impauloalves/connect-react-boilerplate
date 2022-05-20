export default function routes(app, addon) {
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    app.get('/hello-world', addon.authenticate(), (req, res) => {
        res.render(
          'index.hbs',
          {
            title: 'Atlassian Connect',
            component: 'index'
          }
        );
    });
}
