using documentservices.models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace documentservices.controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class documentservice : ControllerBase
    {
        private readonly DocumentContext _context;

        public documentservice(DocumentContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult CreateDocument([FromBody] Document document)
        {
            _context.Documents.Add(document);
            _context.SaveChanges();
            return Ok(document);
        }

        [HttpGet("{id}")]
        public IActionResult GetDocument(int id)
        {
            var document = _context.Documents.Find(id);
            if (document == null) return NotFound();
            return Ok(document);
        }

        [HttpGet]
        public IActionResult GetAllDocuments()
        {
            return Ok(_context.Documents.ToList());
        }

        [HttpPut("{id}")]
        public IActionResult UpdateDocument(int id, [FromBody] Document updatedDocument)
        {
            var document = _context.Documents.Find(id);
            if (document == null) return NotFound();

            document.Id_Proyect = updatedDocument.Id_Proyect;
            document.Content = updatedDocument.Content;
            document.Updated_At = DateTime.UtcNow;
            _context.SaveChanges();
            return Ok(document);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteDocument(int id)
        {
            var document = _context.Documents.Find(id);
            if (document == null) return NotFound();

            _context.Documents.Remove(document);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
