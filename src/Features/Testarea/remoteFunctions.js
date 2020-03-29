export const validate =()=>{
    const person=this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors.filter((k)=>fieldErrors[k]));
    if (!person.name) return true;
    if (!person.email) return true;
    if (!person.course) return true;
    if (!person.department) return true;
    if (errMessages.length) return true;

    return false
};