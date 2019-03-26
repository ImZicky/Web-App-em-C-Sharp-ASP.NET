namespace MilenioBus
{
    class DataService : IDataService
    {
        private readonly ApplicationContext context;

        public DataService(ApplicationContext context)
        {
            this.context = context;
        }

        public void inicializaDB()
        {
            context.Database.EnsureCreated();
        }

    }
}
