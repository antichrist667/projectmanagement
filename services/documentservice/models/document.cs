namespace documentservices.models
{
    public class document
    {
        public int Id { get; set; }
        public int Id_Proyect { get; set; }
        public string Content { get; set; }
        public DateTime Created_At { get; set; }
        public DateTime Updated_At { get; set; }
    }
}
