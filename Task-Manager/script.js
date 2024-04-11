//Table data

const data = [

    { task:"Meeting",discription:'client meeting',duration:2.00 },
    { task:"Project",discription:'developing',duration:4.00 },
    { task:"break",discription:'-',duration:1.00 },
    { task:"Meeting",discription:'daily',duration:6.00 }

];

const tablebody = document.getElementById("datas");
function Addtask()
{
    const newtask = document.getElementById('newtask').value;
    const newdescription = document.getElementById('newdescription').value;
    const newduration = parseFloat(document.getElementById('newduration').value);

    if(newtask && newdescription && newduration)
    {
        const newrow = document.createElement('tr');
        newrow.innerHTML = `
        <td>${newtask}</td>
        <td>${newdescription}</td>
        <td>${newduration}</td>`;
        tablebody.appendChild(newrow);

        document.getElementById('newtask').value='';
        document.getElementById('newdescription').value='';
        document.getElementById('newduration').value='';

        }
        else{
            alert("Please fill all input fields")
        }
}

data.forEach(item =>
    {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.task}</td>
        <td>${item.discription}</td>
        <td>${item.duration}</td>`;
        tablebody.appendChild(row);
    })