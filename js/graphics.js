function tbody (_id, _type, _labels, _label_max, _data, _colors, _hover_off) {
    const _config =  {
        type: _type,
        data: {
            labels: _labels,
            datasets: [{
                label: _label_max,
                data: _data,
                backgroundColor: _colors
            }],
            hoverOffset: _hover_off
        },
        options: {}
    };
    const id = document.getElementById(_id).getContext('2d');
    const _table = new Chart(id, _config);
}
// id
let _id = 'g_presentacion';
// bar, bubble, doughnut, pie, line, polarArea
let _type = 'doughnut' ;
let _labels = ['Femenino', 'Masculino', 'Valmiki'];
let _label_max = 'Sexo';
let _data = [75, 25, 1];
let _colors = ['pink', 'blue', 'purple'];
let _hover_off = 3;
// change only
tbody(_id, _type, _labels, _label_max, _data, _colors, _hover_off);


// id
_id = 'g_muestreo';
// bar, bubble, doughnut, pie, line, polarArea
_type = 'polarArea' ;
_labels = ['Azul', 'Naranja', 'Rosa', 'Verde', 'Gris', 'Rojo', 'Negro', 'Marron', 'Morado'];
_label_max = 'Colores';
_data = [100, 150, 200,250, 300, 350, 400, 450, 500];
_colors = ['blue', 'orange', 'pink', 'green', 'gray', 'red', 'black', 'brown', 'purple'];
_hover_off = 3;
// change only
tbody(_id, _type, _labels, _label_max, _data, _colors, _hover_off);

_id = 'g-muestreo-persona';
// bar, bubble, doughnut, pie, line, polarArea
_type = 'pie' ;
_labels = ['Voleibol', 'Futbol','Futbol americano','Basquetbol','Beisbol','Esgrima','Gimnasia','Natacion'];
_label_max = 'Colores';
_data = [8,25,13,15,27,2,3,7];
_colors = ['blue', 'orange','pink','green','red','black','brown','purple'];
_hover_off = 3;
// change only
tbody(_id, _type, _labels, _label_max, _data, _colors, _hover_off);
