$sourceUrl = "http://localhost:8080/typescript.zip"
$tempDir = Join-Path $(Get-Item -Path $env:TEMP).FullName (New-Guid).ToString()
$generatedPath = Join-Path (Split-Path $PSScriptRoot) "src/__generated"

# Download and unzip the file
if (-not (Test-Path $tempDir)) {
    New-Item -ItemType Directory -Path $tempDir | Out-Null
}

Write-Host "Downloading $sourceUrl to $tempDir..."
Invoke-WebRequest -Uri $sourceUrl -OutFile "$tempDir/source.zip"
Write-Host "Extracting files from $tempDir/source.zip..."
Expand-Archive -Path "$tempDir/source.zip" -DestinationPath $tempDir

# Remove existing generated path
if (Test-Path $generatedPath) {
    Write-Host "Deleting existing generated path $generatedPath..."
    Remove-Item -Path $generatedPath -Recurse -Force
}

# Move the unzipped files to generated path
Write-Host "Moving files from $tempDir to $generatedPath..."
Move-Item -Path $tempDir -Destination $generatedPath

# Delete the zip file
Remove-Item -Path "$generatedPath/source.zip"

Write-Host "API code is refreshed successfully."