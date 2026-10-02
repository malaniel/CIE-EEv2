[CmdletBinding()]
param(
    [Parameter(Mandatory, Position = 0)]
    [string[]] $Path
)

$repoRoot = Split-Path -Parent $PSScriptRoot
$stagingRoot = Join-Path $repoRoot "content-staging"
$imageExtensions = @(".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp")
$sourceExtensions = @(".md", ".mdx", ".txt")

foreach ($inputPath in $Path) {
    $source = Get-Item -LiteralPath $inputPath -ErrorAction Stop

    if ($source.PSIsContainer) {
        throw "Only files can be staged: $($source.FullName)"
    }

    $extension = $source.Extension.ToLowerInvariant()
    $category = if ($imageExtensions -contains $extension) {
        "images"
    }
    elseif ($sourceExtensions -contains $extension) {
        "sources"
    }
    else {
        "other"
    }

    $destinationDirectory = Join-Path $stagingRoot $category
    $destination = Join-Path $destinationDirectory $source.Name

    if (Test-Path -LiteralPath $destination) {
        throw "A staged file already exists: $destination"
    }

    New-Item -ItemType Directory -Path $destinationDirectory -Force | Out-Null
    Copy-Item -LiteralPath $source.FullName -Destination $destination
    Write-Output $destination
}
