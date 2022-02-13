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
let _labels = ['Femenino', 'Masculino'];
let _label_max = 'Sexo';
let _data = [75, 25];
let _colors = ['pink', 'blue'];
let _hover_off = 3;
// change only
tbody(_id, _type, _labels, _label_max, _data, _colors, _hover_off);


// id
_id = 'g_muestreo';
// bar, bubble, doughnut, pie, line, polarArea
_type = 'polarArea' ;
_labels = ['Azul', 'Naranja', 'Rosa', 'Verde', 'Gris'];
_label_max = 'Sexo';
_data = [120, 130, 180,250, 150];
_colors = ['blue', 'orange', 'pink', 'green', 'gray'];
_hover_off = 3;
// change only
tbody(_id, _type, _labels, _label_max, _data, _colors, _hover_off);
