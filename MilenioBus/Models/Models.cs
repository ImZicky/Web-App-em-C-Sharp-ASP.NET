using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace MilenioBus.Models
{
    [DataContract]
    public class BaseModel
    {
        [DataMember]
        public int Id { get; protected set; }
    }

    public class Endereco : BaseModel
    {
        public Endereco()
        {
        }

 
        public Endereco(string logradouro, int numero, string complemento, string bairro, string cidade, long cEP)
        {
            Logradouro = logradouro;
            Numero = numero;
            Complemento = complemento;
            Bairro = bairro;
            Cidade = cidade;
            CEP = cEP;
        }


        [Required]
        public string Logradouro { get; set; }
        [Required]
        public int Numero { get; set; }
        [Required]
        public string Complemento { get; set; }
        [Required]
        public string Bairro { get; set; }
        [Required]
        public string Cidade { get; set; }
        [Required]
        public long CEP { get; set; }
        [Required]
        public Pessoa Pessoa { get; set; }

    }

    public class Pessoa : BaseModel
    {   
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public List<Endereco> Endereco { get; set; } = new List<Endereco>();

        public Pessoa()
        {

        }

        public Pessoa(string nome, string email, List<Endereco> enderecos)
        {
            Nome = nome;
            Email = email;
            Endereco = enderecos;
        }



    }
}
