using Microsoft.EntityFrameworkCore;
using documentservices.models;  

namespace documentservices.models
{
    public class DocumentContext : DbContext
    {
        public DocumentContext(DbContextOptions<DocumentContext> options)
            : base(options)
        {
        }

        public DbSet<Document> Documents { get; set; }
    }
}
