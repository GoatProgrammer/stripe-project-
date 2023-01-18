const { supabaseAccessToken } = session

const supabase = createClient(
  "https://qoqkxcfypayewptggavr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvcWt4Y2Z5cGF5ZXdwdGdnYXZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI4OTk2OTIsImV4cCI6MTk4ODQ3NTY5Mn0.uF1mGKwnlvnkmmX04IEP85QmKag9Tbvc5J8hSk6gQoA",
  {
    global: {
      headers: {
        Authorization: `Bearer ${supabaseAccessToken}`,
      },
    },
  }
)
// Now you can query with RLS enabled.
// const { data, error } = await supabase.from("users").select("*")