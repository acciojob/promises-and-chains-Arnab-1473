//your JS code here. If required.
function waitFor(miliseconds) {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
}

function extractNameAndShowAlert(obj) {
    const {name} = obj;
    alert(`Welcome, ${name}. You can vote.`);
    return {extractedName: name};
}

function rejectIfUnder18(obj) {
    const {age} = obj;
    if(age < 18) {
        alert(`Oh sorry ${obj.name}. You aren't old enough.`);
        throw new Error("Under 18");
    }
    return obj;
}

document.querySelector('form').addEventListener('submit', async(event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const age = document.querySelector('#age').value;

    if(!name || !age) {
        alert('Name and Age cannot be empty');
        return;
    }

    try{
        const obj = {name, age};
        await waitFor(4000);
        const extracted = extractNameAndShowAlert(obj);
        const result = rejectIfUnder18(extracted);
        console.log(result);
    }
    catch(error) {
        console.error(error);
    }
});