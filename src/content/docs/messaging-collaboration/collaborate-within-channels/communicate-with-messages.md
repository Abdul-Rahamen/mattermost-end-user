
# How to Setup NVIDIA Drivers and CUDA for vGPUs on Ubuntu 20.04

## 1. Checking the OS Version
Ensure that your Ubuntu version is 20.04 by running the following command:
`lsb_release -a`

## 2. Checking the NVIDIA Driver
Check if the NVIDIA drivers are already installed and functioning by running:
`nvidia-smi`

This should output the version of the GPU driver. If the command fails or cannot find the driver, follow the steps below based on your situation:

### If `nvidia-smi` failed (driver is corrupted or outdated):
1. Purge the old driver by running: 
   `sudo apt purge nvidia*`
2. Copy the `nvidia-linux-grid-580_580.65.06_amd64.deb` driver to your current directory.
3. Install the vGPU Driver by running:
   `sudo apt-get install ./nvidia-linux-grid-580_580.65.06_amd64.deb`
4. Verify the installation was successful by running `nvidia-smi` again.

### If `nvidia-smi` cannot find the driver (no driver installed):
1. **DO NOT** install any standard drivers from the online Ubuntu repositories, as you specifically need the vGPU grid driver.
2. Follow steps 2 through 4 from the section directly above to install the local `.deb` package.

## 3. Checking the NVIDIA CUDA Toolkit
Check if CUDA is already installed by running:
`nvcc --version`

If the command is not found or does not show the version info, follow these steps to install it:

1. **DO NOT** install the `nvidia-cuda-toolkit` from the standard online package manager (apt), as it will install a conflicting display driver and corrupt your vGPU setup.
2. Copy the `cuda_13.2.1_595.58.03_linux.run` file to your current directory.
3. Run the installer using the following command:
   `sudo sh cuda_13.2.1_595.58.03_linux.run`
4. If a prompt appears stating: *"Existing package manager installation of the driver found. It is strongly recommended that you remove this before continuing,"* just select **Continue**.
5. Accept the End User License Agreement by typing `accept` and hitting Enter.
6. **CRITICAL:** In the menu that appears, uncheck everything *except* the **CUDA Toolkit 13.2**. Ensure the "Driver" option is completely unchecked so it does not overwrite your vGPU driver.
7. Select **Install** and hit Enter.
8. Once finished, you will likely need to add CUDA to your system path. Run these two commands:
   `echo 'export PATH=/usr/local/cuda/bin:$PATH' >> ~/.bashrc`
   `source ~/.bashrc`
9. Finally, verify the toolkit was installed correctly by running:
   `nvcc --version`