function getAge() {
    const bd = new Date(2003, 3, 30); 
    var diff_ms = Date.now() - bd.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

export default getAge;