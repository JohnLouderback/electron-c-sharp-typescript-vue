using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace DotNet.Windows {

  class App {
    public async Task<object> DisplayMessage(string message) {
      MessageBox.Show("Hello", message);
      return new Result<bool> {
        result = true
      };
    }
  }
}
