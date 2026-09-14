const SUPABASE_URL = "https://exaohyhqllzylcfyqtge.supabase.co";
const SUPABASE_KEY = "sb_publishable_35_gdLzcN8dsWsd8lChybg_WVZPonzO";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Register clicked:", email);

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        console.error("Supabase error:", error);
        document.getElementById("message").innerText = error.message;
        return;
    }

    console.log("Success:", data);

    document.getElementById("message").innerText =
        "Akaun berjaya didaftarkan!";
}