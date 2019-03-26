using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MilenioBus.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MilenioBus.Controllers
{
    public class PessoaController : Controller
    {

        private readonly ApplicationContext context;

        public PessoaController(ApplicationContext context)
        {
            this.context = context;
        }

        public IActionResult CadastroPessoa()
        {
            ViewData["Title"] = "Cadastro";
            return View();
        }

        public IActionResult CadastrandoPessoa(string nome, string email, string logradouro, int numero, string complemento, string bairro, string cidade, long cep)
        {
            Pessoa p = new Pessoa();
            List<Endereco> enderecos = new List<Endereco>();
            Endereco e = new Endereco();

            p.Nome = nome;
            p.Email = email;

            e.Logradouro = logradouro;
            e.Numero = numero;
            e.Complemento = complemento;
            e.CEP = cep;
            e.Bairro = bairro;
            e.Cidade = cidade;

            enderecos.Add(e);

            p.Endereco = enderecos;

            context.Set<Pessoa>().Add(new Pessoa(p.Nome, p.Email, p.Endereco));
            context.SaveChanges();

            ViewData["Title"] = "Cadastro";
            ViewData["Resp"] = true;

            return View("CadastroPessoa");
        }

        public IActionResult ListarPessoas()
        {

            List<Pessoa> pessoas = new List<Pessoa>();

            bool continua = true;
            int cont = 1;

            while (continua == true)
            {
                Pessoa p = context.Find<Pessoa>(cont);
                if (p == null)
                {
                    continua = false;
                }
                else
                {
                    pessoas.Add(new Pessoa(p.Nome, p.Email, p.Endereco));
                    cont++;
                }
            }

            ViewData["Title"] = "Lista";
            return View(pessoas);
        }



    }
}
