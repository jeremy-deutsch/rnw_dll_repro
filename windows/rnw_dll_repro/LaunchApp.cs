using System;
using System.Diagnostics;
using Microsoft.ReactNative.Managed;

namespace rnw_dll_repro
{
    [ReactModule]
    class LaunchApp
    {
        [ReactMethod("launchApp")]
        public void Launch(string path)
        {
            ProcessStartInfo startInfo = new ProcessStartInfo(path);
            Process.Start(startInfo);
        }
    }
}
